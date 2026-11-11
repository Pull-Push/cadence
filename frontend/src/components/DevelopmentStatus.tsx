type DevelopmentStatusProps = {
    message: string;
}

function DevelopmentStatus({message}: DevelopmentStatusProps){
    return <p role="status">Development status: {message}</p>
}

export default DevelopmentStatus;