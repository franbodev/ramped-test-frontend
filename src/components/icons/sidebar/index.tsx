import dynamic from 'next/dynamic';

export const JobsIcon = dynamic(() => import('@components/icons/sidebar/jobs').then(({ JobsIcon }) => JobsIcon));
export const SlotIcon = dynamic(() => import('@components/icons/sidebar/slot-icon').then(({ SlotIcon }) => SlotIcon));
