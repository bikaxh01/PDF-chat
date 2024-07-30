"use client"
import { Button } from './ui/button'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Placeholder() {
 
    const router = useRouter()

    const handleClick = ()=>{
        console.log("Upload Button clicked");
        router.push('/dashboard/upload')
    }
  return (
    <div className=' m-6'>
      <Button onClick={handleClick} className=' h-56 w-56 bg-gray-400'><PlusIcon/> <p>Upload</p></Button>
    </div>
  )
}

export default Placeholder