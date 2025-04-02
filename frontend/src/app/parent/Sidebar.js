import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-lg font-semibold mb-6">Parent Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/parent/chat" className="text-blue-600 hover:underline">
            🗨️ Chat with Teacher
          </Link>
        </li>
      </ul>
    </div>
  );
}
