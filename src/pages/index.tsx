import AllCatalogs from '@/components/AllCatalogs/AllCatalogs';
import NavigationHome from '@/components/NavigationHome/NavigatonHome';

export default function Home() {
  return (
    <>
      <NavigationHome />
      <main>
        <AllCatalogs />
      </main>
    </>
  );
}
