import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-[#DAB7AC] min-h-screen flex-col justify-center items-center">
        <h1 className="text-3xl text-center">Welcome to Ellie Bee Bakes!</h1>
        <Image src="/logo.png" alt="Ellie Bee Bakes Logo" width={200} height={200}/>
        <span className="font-medium">This site is currently under contruction, meanwhile check us out on social media!</span>
        <span>Or contact us at <b>contact@elliebeebakes.com</b></span>
    </div>
  );
}
