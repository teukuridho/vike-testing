import "./tailwind.css";
export default function AdminAdmin2Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="w-screen h-screen !bg-red-500">
        layout<br/>{children}
        
    </div>
}