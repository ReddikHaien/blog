export default function Title(props: {title: string} = {title: "Title title"}){
    return (
    <div className='min-w-screen'>
        <h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-primary float-left'>{props.title}</h1>
    </div>
    );
}