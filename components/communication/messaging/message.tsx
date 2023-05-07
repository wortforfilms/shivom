import { deleteMessage } from '@/lib/Store'
import UserContext from '@/lib/UserContext'
import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'


const Message = (props:any) => {
  const { message }=props
  const { user, userRoles } = useContext(UserContext)

  return (
    <div className="py-1 flex items-center space-x-2">
      <div className="text-gray-100 w-4">
        {(user?.id === message.user_id ||
          userRoles.some((role:any) => ['admin', 'moderator'].includes(role))) && (
          <button onClick={() => deleteMessage(message.id)}>
            <FaTrash />
          </button>
        )}
      </div>
      <div>
        <p className="text-blue-700 font-bold">{message.author.username}</p>
        <p className="text-white">{message.message}</p>
      </div>
    </div>
  )
}

export default Message