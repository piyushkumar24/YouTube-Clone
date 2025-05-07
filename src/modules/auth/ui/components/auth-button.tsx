import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import React from 'react'

type Props = {}

function AuthButton({ }: Props) {
    // TODO: Add different auth states
    return (
        <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none">
            <UserCircleIcon className="h-5 w-5"/>
            Sign In
        </Button>
    )
}

export default AuthButton