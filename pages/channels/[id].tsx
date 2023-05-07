
import Message from '@/components/Message'
import MessageInput from '@/components/communication/messaging/messageInput'
import { useRouter } from 'next/router'
import { useStore, addMessage } from '@/lib/Store'
import { useContext, useEffect, useRef } from 'react'
import UserContext from '@/lib/UserContext'
import Layout from '@/components/Message'

const ChannelsPage = (props:any) => {
  const router = useRouter()
  const { user, authLoaded, signOut } = useContext(UserContext)
  const messagesEndRef = useRef<any>(null)

  // Else load up the page
  const { id: channelId } = router.query
  const { messages, channels } = useStore({ channelId })

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }, [messages])

  // redirect to public channel when current channel is deleted
  useEffect(() => {
    if (!channels.some((channel:any) => channel.id === Number(channelId))) {
      router.push('/channels/1')
    }
  }, [channels, channelId, router])

  // Render the channels and messages
  return (
    <Layout channels={channels} activeChannelId={channelId}>
      <div className="relative h-screen">
        <div className="Messages h-full pb-16">
          <div className="p-2 overflow-y-auto">
            {messages.map((x:any) => (
              <Message key={x.id} message={x} />
            ))}
            <div ref={messagesEndRef} style={{ height: 0 }} />
          </div>
        </div>
        <div className="p-2 absolute bottom-0 left-0 w-full">
          <MessageInput onSubmit={async (text:any) => addMessage(text, channelId, user.id)} />
        </div>
      </div>
    </Layout>
  )
}

export default ChannelsPage