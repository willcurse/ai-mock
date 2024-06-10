import React from 'react'

const Toast = () => {
    function PromiseBasedToastExample() {
        const toast = useToast()
        return (
          <Button
            onClick={() => {
              // Create an example promise that resolves in 5s
              const examplePromise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(200), 5000)
              })
      
              // Will display the loading toast until the promise is either resolved
              // or rejected.
              toast.promise(examplePromise, {
                success: { title: 'Promise resolved', description: 'Looks great' },
                error: { title: 'Promise rejected', description: 'Something wrong' },
                loading: { title: 'Promise pending', description: 'Please wait' },
              })
            }}
          >
            Show Toast
          </Button>
        )
      }
  return (
    <div>
        
    </div>
  )
}

export default Toast