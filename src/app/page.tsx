import { BrandComponent } from '@/components/home/brands';
import { NewArraival } from '@/components/home/newArraival';
import { DividerComponent } from '@/components/util/divider';
import { CarroucelComponent } from '@/components/home/carroucel';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
       <CarroucelComponent />
        <NewArraival />
        <DividerComponent />
        <BrandComponent />
    </main>
  )
}
