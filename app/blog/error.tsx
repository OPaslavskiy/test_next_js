'use client';
export default function ErrorWrapper({error}: {error: Error}) {
    return <h2 className="container"> Ooops!!! {error.message} </h2>
}