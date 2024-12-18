export default async function PaymentSuccess({ searchParams }) {
  const { totalAmount } = await searchParams;
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-bratwurst">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You have successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-stormygreen mt-5 text-4xl font-bold">
          £{(totalAmount || 0).toFixed(2)}
        </div>
      </div>
    </main>
  );
}
