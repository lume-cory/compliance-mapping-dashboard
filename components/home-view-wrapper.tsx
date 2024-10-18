'use client'

import { HomeViewComponent } from './home-view'
import { useRouter } from 'next/navigation'

export function HomeViewWrapper() {
  const router = useRouter()

  const handleNavigateToComplianceMapper = () => {
    router.push('/compliance-mapper')
  }

  return <HomeViewComponent onNavigateToComplianceMapper={handleNavigateToComplianceMapper} />
}
