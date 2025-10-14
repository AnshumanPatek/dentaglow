import {Spinner} from "@/components/ui/spinner"

export default function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-bottom" >Denta Glow is coming soon</h1>
        <Spinner/>  
      </div>
    </>
  );
}
