
import { useQuery } from '@tanstack/react-query';
import { Skip, ProcessedSkip } from '@/types/skip';

const fetchSkips = async (postcode: string, area: string): Promise<ProcessedSkip[]> => {
  const response = await fetch(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch skips');
  }
  
  const data: Skip[] = await response.json();
  
  // Process the skip data
  const processedSkips: ProcessedSkip[] = data.map(skip => ({
    ...skip,
    total_price: skip.price_before_vat + (skip.price_before_vat * skip.vat / 100),
    title: `${skip.size} Yard Skip`,
    hire_label: `${skip.hire_period_days} day hire`
  }));
  
  return processedSkips;
};

export const useSkips = (postcode: string = 'NR32', area: string = 'Lowestoft') => {
  const { data: skips = [], isLoading: loading, error } = useQuery({
    queryKey: ['skips', postcode, area],
    queryFn: () => fetchSkips(postcode, area),
  });

  return { 
    skips, 
    loading, 
    error: error?.message || null 
  };
};
