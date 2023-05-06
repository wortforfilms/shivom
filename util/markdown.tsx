import { useEditor, EditorContent } from '@tiptap/react'
import { Editor } from "@tiptap/core";

import StarterKit from '@tiptap/starter-kit'
// import { WindowWithProseMirror } from '../reader/script_writer/ScriptCanvas'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect, useState } from 'react';
export type WindowWithProseMirror = Window &
  typeof globalThis & { ProseMirror: Editor };

const Tiptap = (props:any) => {
  const {state,setState}=props
  const editor = useEditor({
    onUpdate: ({ editor }) => {
        (window as WindowWithProseMirror).ProseMirror = editor;
        const content = editor.getHTML()
        const processed_data=editor.getJSON()
        // console.log()
        const tex=processed_data && processed_data?.content && processed_data?.content[0] && processed_data?.content[0]?.content && processed_data?.content[0]?.content[0]?.text
       setState(content)
      },
      
    extensions: [
      StarterKit,
      Placeholder.configure({
        // Use a placeholder:
        placeholder: `Enter ${"post matter"} here`,
      }),
    ],
    content: state,
    editorProps: {
      attributes: {
        spellcheck: 'true',
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-2 focus:outline-none',

      },
    },
  })

  useEffect(() => {
    let mount=true
    if(mount){
      if(state===null){
        editor?.commands?.clearContent()
      }
    }
  
    return () => {
      mount=false
    }
  }, [state, editor])
  


  return (
    <EditorContent editor={editor}  className="ring-2 text-[10px] sm:text-[12px] font-mono ring-slate-300  w-full  h-full  overflow-auto rounded-lg " />
  )
}

export default Tiptap;