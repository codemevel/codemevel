export default function Post({params}:{params:{slug:string}}){
    return <div className="text-4xl pt-20">{params.slug}</div>
}