export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      home 레이아웃
      {children}
    </div>
  );
}
