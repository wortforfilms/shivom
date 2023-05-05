import axios from "axios";
import { useCallback, useRef, useState } from "react";


export interface BlogPost {
    id: string;
    title: string;
    description: string;
   }
   
// useInfiniteScroll.ts
export interface UseInfiniteScroll {
    isLoading: boolean;
    loadMoreCallback: (el: HTMLDivElement) => void;
    hasDynamicPosts: boolean;
    dynamicPosts: BlogPost[];
    isLastPage: boolean;
   }
    
   export const useInfiniteScroll = (posts: BlogPost[]): UseInfiniteScroll => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasDynamicPosts, setHasDynamicPosts] = useState(false);
    const [dynamicPosts, setDynamicPosts] = useState<BlogPost[]>(posts);
    const [isLastPage, setIsLastPage] = useState(false);
    const observerRef = useRef<IntersectionObserver>();
    const loadMoreTimeout: NodeJS.Timeout = setTimeout(() => null, 500);
    const loadMoreTimeoutRef = useRef<NodeJS.Timeout>(loadMoreTimeout);
    
    const handleObserver = useCallback(
      (entries: any[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setIsLoading(true);
          clearTimeout(loadMoreTimeoutRef.current);
    
          // this timeout debounces the intersection events
          loadMoreTimeoutRef.current = setTimeout(() => {
            axios.get(`/api/posts/${page}`).then((resp:any) => {
              setPage(page + 1);
              const newPosts = resp?.data["posts"];
    
              if (newPosts?.length) {
                const newDynamicPosts = [...dynamicPosts, ...newPosts];
                setDynamicPosts(newDynamicPosts);
                setIsLastPage(newDynamicPosts?.length === resp?.data["total"]);
                setHasDynamicPosts(true);
                setIsLoading(false);
              }
            });
          }, 500);
        }
      },
      [loadMoreTimeoutRef, setIsLoading, page, dynamicPosts]
    );
    
    const loadMoreCallback = useCallback(
      (el: HTMLDivElement) => {
        if (isLoading) return;
        if (observerRef.current) observerRef.current.disconnect();
    
        const option: IntersectionObserverInit = {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        };
        observerRef.current = new IntersectionObserver(handleObserver, option);
    
        if (el) observerRef.current.observe(el);
      },
      [handleObserver, isLoading]
    );
    
    return {
      isLoading,
      loadMoreCallback,
      hasDynamicPosts,
      dynamicPosts,
      isLastPage,
    };
   };