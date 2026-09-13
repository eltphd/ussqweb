import { redirect } from 'next/navigation';

// Sparent Science lives on the institute homepage as its own section.
export default function SparentPage() {
  redirect('/#sparent');
}
