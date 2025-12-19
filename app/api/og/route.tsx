import { ImageResponse } from '@vercel/og';
 
export const runtime = 'edge';
 
export async function GET() {
  // Brand color from your tailwind config (sky-950)
  const brandColorDark = '#082f49';
  const brandColorAccent = '#0ea5e9'; // sky-500 for accents

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          // Using a gradient background that mimics the "Blue hour" aviation feel
          backgroundImage: `linear-gradient(to bottom right, ${brandColorDark}, #0c4a6e)`,
          color: 'white',
          padding: '40px 60px',
          fontFamily: '"Inter", sans-serif', // Uses a system sans-serif
          position: 'relative',
        }}
      >
        {/* Abstract background graphic element (Optional: simulates flight paths) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `radial-gradient(circle at 80% 20%, ${brandColorAccent}20 0%, transparent 50%)`,
            zIndex: 0,
          }}
        />

        {/* Content Container */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
          {/* Top Branding */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            {/* You could replace this 'S' with an SVG of your actual logo */}
            <div style={{ 
              background: brandColorAccent, 
              width: '40px', 
              height: '40px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: '15px',
              fontWeight: 'bold',
              fontSize: '24px'
            }}>
              S
            </div>
            <span style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '1px' }}>
             SKY SPACE AVIATION
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{ 
            fontSize: '64px', 
            fontWeight: 800, 
            lineHeight: 1.1, 
            margin: '0 0 20px 0',
            background: `linear-gradient(to right, white, ${brandColorAccent})`,
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Aviation & Legal<br />
            Consultancy Firm.
          </h1>

          {/* Tagline */}
          <p style={{ fontSize: '30px', fontWeight: 400, color: '#e0f2fe', margin: '0 0 40px 0' }}>
            Law Space Beyond.
          </p>

          {/* Services / Footer details */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '20px', 
            color: '#bae6fd' // lighter sky color
          }}>
            <span>Airline Registration</span>
            <span style={{ margin: '0 15px', color: brandColorAccent }}>•</span>
            <span>Regulatory Compliance</span>
            <span style={{ margin: '0 15px', color: brandColorAccent }}>•</span>
            <span>Global Advisory</span>
          </div>
        </div>

        {/* Website URL at bottom */}
        <div style={{ 
             position: 'absolute', 
             bottom: '40px', 
             left: '60px', 
             fontSize: '20px', 
             opacity: 0.8,
             zIndex: 10
        }}>
          skyspaceaviation.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}