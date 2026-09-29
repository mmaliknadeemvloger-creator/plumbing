import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const BaseIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" {...props} />
);

export const PhoneIcon = (props: IconProps) => <BaseIcon {...props}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></BaseIcon>;
export const ClockIcon = (props: IconProps) => <BaseIcon {...props}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></BaseIcon>;
export const ShieldIcon = (props: IconProps) => <BaseIcon {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></BaseIcon>;
export const MapPinIcon = (props: IconProps) => <BaseIcon {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></BaseIcon>;
export const ChevronDownIcon = (props: IconProps) => <BaseIcon {...props}><path d="M6 9l6 6 6-6" /></BaseIcon>;
export const ChevronRightIcon = (props: IconProps) => <BaseIcon {...props}><path d="M9 18l6-6-6-6" /></BaseIcon>;
export const MenuIcon = (props: IconProps) => <BaseIcon {...props}><path d="M3 12h18M3 6h18M3 18h18" /></BaseIcon>;
export const XIcon = (props: IconProps) => <BaseIcon {...props}><path d="M18 6L6 18M6 6l12 12" /></BaseIcon>;
export const CheckIcon = (props: IconProps) => <BaseIcon {...props}><path d="M20 6L9 17l-5-5" /></BaseIcon>;
export const AlertTriangleIcon = (props: IconProps) => <BaseIcon {...props}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01" /></BaseIcon>;
export const WrenchIcon = (props: IconProps) => <BaseIcon {...props}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></BaseIcon>;
export const DropletIcon = (props: IconProps) => <BaseIcon {...props}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></BaseIcon>;
export const FlameIcon = (props: IconProps) => <BaseIcon {...props}><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" /></BaseIcon>;
export const ThermometerIcon = (props: IconProps) => <BaseIcon {...props}><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" /></BaseIcon>;
export const SearchIcon = (props: IconProps) => <BaseIcon {...props}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></BaseIcon>;
export const StarIcon = (props: IconProps) => <BaseIcon {...props}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></BaseIcon>;
export const ArrowRightIcon = (props: IconProps) => <BaseIcon {...props}><path d="M5 12h14M12 5l7 7-7 7" /></BaseIcon>;
export const HomeIcon = (props: IconProps) => <BaseIcon {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></BaseIcon>;
export const MailIcon = (props: IconProps) => <BaseIcon {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></BaseIcon>;
export const UserIcon = (props: IconProps) => <BaseIcon {...props}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></BaseIcon>;
