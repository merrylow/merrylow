// import Skeleton from "react-loading-skeleton";
import ClipLoader from 'react-spinners/ClipLoader';



const Loading = () => {
     return (
          <div className='w-full h-[75vh] flex items-center justify-center'>
               <ClipLoader size={105} loading={true} color='#a12fda' />
          </div>
     )
}

export default Loading