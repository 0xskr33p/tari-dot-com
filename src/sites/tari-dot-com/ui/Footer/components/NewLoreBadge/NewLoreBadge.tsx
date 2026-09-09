'use client';

import { BadgeLink, BadgeMark } from './styles';

export default function NewLoreBadge() {
    return (
        <BadgeLink href="https://newlore.ai/tari">
            <BadgeMark src="https://newlore.ai/mark-orange.svg?b=tari" width={22} height={22} alt="New Lore" />
            For AI
        </BadgeLink>
    );
}
