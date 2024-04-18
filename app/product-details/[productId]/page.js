import Layout from './layout' 
import Favicon from '/public/logo-1.png';



export const metadata = {
    title: "Product",
    generator: 'Next.js',
    description: 'My Store by create next app',
    keywords: ['Next.js', 'React', 'JavaScript'],
    creator: 'Ahmed Azouz',
    publisher: 'Ahmed Azouz',
    icons: [{ rel: 'icon', url: Favicon.src }],
};


const page = () => {
    return (
        <><Layout /></>
    )
}

export default page