// Monogram: a mint ring around Marlon's initials.
export default function Mark({ size = 34 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 34 34"
            aria-hidden="true"
            className="shrink-0"
        >
            <circle cx="17" cy="17" r="17" fill="var(--mint)" />
            <circle
                cx="17"
                cy="17"
                r="12.5"
                fill="none"
                stroke="var(--on-mint)"
                strokeOpacity="0.18"
            />
            <text
                x="17"
                y="21.2"
                textAnchor="middle"
                fontSize="11.5"
                fontWeight="650"
                letterSpacing="-0.4"
                fill="var(--on-mint)"
                fontFamily="var(--font-sans), system-ui, sans-serif"
            >
                MW
            </text>
        </svg>
    );
}
