export default function Post({searchParams}: {
    searchParams: {
        id: any;
    }
    }) {
    console.log(searchParams.id);
    return (
        <>
            <h1>Hello world</h1>
        </>
    )

}