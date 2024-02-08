import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* TODO: create a card with image, a message and button which redirect user to checkout */}
      <div className="cursor-pointer">
        <Link href="/checkout">Checkout</Link>
      </div>
    </main>
  );
}
