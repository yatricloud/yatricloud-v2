import React from 'react';
import { WhatsAppGroup } from './WhatsAppGroup';
import { whatsappGroups } from './communityData';

export function CommunityGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {whatsappGroups.map((group, index) => (
        <WhatsAppGroup key={index} {...group} />
      ))}
    </div>
  );
}