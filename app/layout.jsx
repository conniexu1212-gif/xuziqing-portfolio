import './globals.css';

const siteTitle = 'XUZIQING | 游戏营销 · 品牌营销 · 内容策划';
const siteDescription = '游戏营销、品牌营销与内容策划作品集，展示主机 / PC 游戏发行、品牌 Campaign、IP 联名及内容运营项目。';

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'XUZIQING 个人职业作品集' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
