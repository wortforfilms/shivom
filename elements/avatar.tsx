
import { S3Uri } from "@/constants/containers";
import Image from "next/image";



export const AutoAvatar = (props: any) => {
    const { user, size } = props;
    return <div className="relative -mt-1">
        {user && user?.profile_image ? <Image src={`${S3Uri}/media/tlp${user.profile_image}`} alt="re" width={100} height={100} style={{ width: "auto", height: "auto" }} 
        className={`rounded-full w-${size?size:'24'} h-${size?size:'24'} p-4`} /> :
            <div className={`rounded-full text-${size?[`${size}px`]:'3xl'}] font-bold bg-gray-700 text-white w-${size?size:16} h-${size?size:16} text-center mt-2 p-2`}>{user.username.slice(0, 1)}</div>}

    </div>;
};
