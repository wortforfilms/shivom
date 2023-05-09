import {TSApp as Canvas}from './canvas'
import { Overlay } from './overlay'

export const Placeholder=()=>{
  return <div id="root">
  <Canvas />
  <Overlay />
</div>
}