import ComingSoonPlaceholder from '@/components/common/ComingSoonPlaceholder';

export const metadata = {
  title: 'Blueprint Details - ODYSSEY AI',
};

export default function BlueprintDetailPage({ params }) {
  const formattedSlug = params?.slug ? params.slug.replace(/-/g, ' ') : 'Blueprint';

  return (
    <ComingSoonPlaceholder
      title={`Blueprint: ${formattedSlug}`}
      subtitle="Full day-by-day interactive pacing, venue reservation links, and pedestrian vector route details."
    />
  );
}
