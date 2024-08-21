import { Card } from 'flowbite-react'
import { FC } from 'react'

const Dashboard: FC<any> = () => {
    return (
        <Card className="max-w-full h-3/6 text-center">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    Welcome to the Dashboard
                </p>
            </h5>
        </Card>
    )
}

export default Dashboard