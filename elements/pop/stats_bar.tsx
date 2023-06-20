import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiCommentAdd, BiLike, BiMicrophone, BiShare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  open_post_comment_panel,
  open_post_stat_panel,
} from "@/store/panels/action";
import { nFormatter } from "@/util/numberFormatter/nFormatter";
// import { IconButton } from "@/display/action/button/IconButton";
import { FcRating } from "react-icons/fc";
import useElementOnScreen from "@/hook/useElementOnScreen";
// import { IconButtonSmall } from "@/display/action/button/IconButtonSmall";
// import { posts_stat } from "@/display/action/stats";
import { GoSmiley } from "react-icons/go";
import { MdAttachment } from "react-icons/md";
import { IconButton } from "@/action/button/IconButton";
import { IconButtonSmall } from "@/action/button/IconButtonSmall";
import { posts_stat } from "./actions";

export const PostStatsBar = (props: any) => {
  const { post, doc, id, meta, initialReduxState, comments_count } = props;

  const earth: typeof initialReduxState = useSelector((state) => state);
  const [likes, setLikes] = useState<any>(0);
  const [views, setViews] = useState<any>(0);
  const [rating, setRating] = useState<any>(0);
  const [raters, setRaters] = useState<any>([]);
  const [shares, setShares] = useState<any>(0);
  const [liked_by, setLikedBy] = useState<any>([]);
  const [comment, setComment] = useState<any>(false);
  const [post_comments, setPostComments] = useState<any>([]);
  const [stat, setStat] = useState<any>(null);

  const dispatch = useDispatch();

  const post_actions = [
    {
      label: "Like",
      icon: <BiLike />,
      action: () => {
        dispatch(
          open_post_stat_panel({
            id,
            likes,
            views,
            shares,
            liked_by,
            meta,
            pop_view: "like",
          })
        );
      },
      count: nFormatter(likes),
    },
    {
      label: "Rate",
      icon: raters?.includes(earth?.auth?.user?.id) ? (
        <FcRating />
      ) : (
        <FcRating className="grayscale" />
      ),
      action: () => {
        dispatch(
          open_post_stat_panel({
            id,
            likes,
            views,
            shares,
            liked_by,
            meta,
            pop_view: "rate",
          })
        );
      },
      count: nFormatter(rating),
    },
    {
      label: "Comment",
      icon: <BiMicrophone />,
      action: () => {
        // dispatch(show_comment())
        setComment(!comment);
        console.log('start audio listner')
      },
      count: nFormatter(views),
    },
    {
      label: "Share",
      icon: <BiShare />,
      action: () => {
        dispatch(
          open_post_stat_panel({
            id,
            likes,
            views,
            shares,
            liked_by,
            meta,
            pop_view: "share",
          })
        );
      },
      count: nFormatter(faker.datatype.number({ min: 0, max: 1000000 })),
    },
  ];



  const [viewed_by, setViewedBy] = useState<any>([]);

  const statRef = useRef<any>(null);
  const isVisible = useElementOnScreen({}, statRef);

  useEffect(() => {
    let mount = true;
    if (mount && stat) {
      // console.log("first view post---->", stat)
      setLikedBy(stat.liked_by);
      setLikes(stat.total_likes);
      // total_views
      setRating(
        stat?.rating
          ?.map((i: any) => i.rating)
          .reduce((a: number, b: number) => a + b)
      );
      setRaters(stat?.rating?.map((i: any) => i.userId));
      setViews(stat.total_views);
      // viewed_by
    }
    return () => {
      mount = false;
    };
  }, [stat]);

  useEffect(() => {
    let mount = true;
    if (mount && isVisible) {
      posts_stat(doc, id, earth?.auth?.user?.id, earth?.device?.id, setStat);
    }
    return () => {
      mount = false;
    };
  }, [doc, id, earth?.auth, earth?.device, isVisible]);

  return (
    <div
      className=" flex flex-col  bg-white rounded-b-lg shadow mb-1 "
      ref={statRef}
    >
      <hr className="py-1 mt-4" />
      <div className="text-xs flex flex-row gap-2 font-bold p-1 ml-2 text-gray-400">
        {post_actions[2].count} views,{" "}
        {post_actions[0].count ? post_actions[0].count : 0} likes, rated{" "}
        {raters?.length && (rating / raters?.length).toFixed(1)} by{" "}
        {raters?.length ? raters?.length : 0},
        {comments_count > 0 && <div>{comments_count} comments</div>}
      </div>
      <div className="flex flex-row justify-around gap-2">
        {post_actions.map((ic, index) => {
          return (
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.05 }}
              key={index}
              className="text-2xl rounded-lg  hover:shadow-xl hover:bg-yellow-300 flex flex-col  text-center p-1 w-100 "
            >
              <div className="text-xs">{ic.label}</div>
              <div className="mx-auto hidden sm:block">
                <IconButton
                  icon={ic.icon}
                  color="gray-700"
                  action={ic.action}
                />
              </div>
              <div className="mx-auto block sm:hidden">
                <IconButtonSmall
                  icon={ic.icon}
                  color="gray-700"
                  action={ic.action}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
        <div
          className="  h-16 w-full bg-gray-100 p-1"
          onClick={() => {
            dispatch(open_post_comment_panel(post_comments, id));
          }}
        >
          <CreateComment />
        </div>
      {/* )} */}
    </div>
  );
};


// @  create comment
const CreateComment = () => {
  return (
    <div className="p-2  h-12  flex flex-row gap-2  bg-white w-full">
      <div className="flex flex-row gap-1 p-1 ">
        <IconButtonSmall
          icon={<GoSmiley />}
          color="gray-700"
          action={() => console.log("open comment")}
        />
        <IconButtonSmall
          icon={<MdAttachment />}
          color="gray-700"
          action={() => console.log("open comment")}
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Add comment"
          className="text-xs bg-slate-200 p-2 h-8 w-full px-2 rounded-lg"
        />
      </div>
      <div className="mt-1">
        <IconButtonSmall
          icon={<BiCommentAdd />}
          color="gray-700"
          action={() => console.log("open comment")}
        />
      </div>
    </div>
  );
};

// collect in
