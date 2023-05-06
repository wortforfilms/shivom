import React, { ErrorInfo, ReactNode } from "react";
// import {verify} from 'jsonwebtoken'
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      
      alert("Sorry.. there was an error")
      localStorage.removeItem('access_token')
// activateLink
      const checkSetToken=(sessionToken:string)=>{
        try {
          
          // const data = verify(sessionToken, APP_SECRET)
          console.log('user from session',sessionToken)
        } catch (error) {
          console.log('error in decode on verify',error)
        }

      }
      // checkSetToken()
      return <ActiveLink href="/">
        {/* <Container> */}

        <h2>Sorry.. there was an error</h2>;
        {/* </Container> */}
        </ActiveLink>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


import { useRouter } from 'next/router'
// import { Container } from "@/display/element/Container";
// import { Container } from "../components/displays/ui/container";


export function ActiveLink(props:any) {
  const { children, href }=props
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}