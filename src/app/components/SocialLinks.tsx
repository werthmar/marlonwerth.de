import LinkButton from './LinkButton';

export default function SocialLinks() {
    return (
        <div className="mb-4 flex flex-row items-center justify-center gap-8">
            <LinkButton
                size={60}
                icon="/images/LinkedInFilled.png"
                textColor="white"
                color="#2b71b1"
                showLinkSymbol={false}
                link="https://www.linkedin.com/in/marlon-werth"
            />
            <LinkButton
                size={60}
                icon="/images/githubBlack.png"
                textColor="white"
                color="black"
                showLinkSymbol={false}
                link="https://github.com/werthmar"
            />
            <LinkButton
                size={60}
                icon="/images/orcid.png"
                textColor="white"
                color="#abcf4a"
                showLinkSymbol={false}
                link="https://orcid.org/0009-0000-9027-6059"
            />
        </div>
    );
}
