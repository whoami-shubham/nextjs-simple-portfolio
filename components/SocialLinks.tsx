export enum SocialLinkKeyType {
  "facebook" = "facebook",
  "instagram" = "instagram",
  "linkedin" = "linkedin",
  "twitter" = "twitter",
  "github" = "github",
  "medium" = "medium",
  "stack-overflow" = "stack-overflow",
  "gmail" = "gmail",
}

export type SocialLinkType = {
  name: SocialLinkKeyType;
  url: string;
};

function CreateLink({ name, url }: SocialLinkType) {
  if (!url) {
    return null;
  }
  if (name == SocialLinkKeyType.gmail) {
    return (
      <a href={url}>
        <i className="fa-solid fa-envelope px-1" />
      </a>
    );
  }
  return (
    <a href={url}>
      <i className={`fa-brands fa-${name} px-1`} />
    </a>
  );
}

function SocialLinks({ data }: { data: SocialLinkType[] }) {
  return (
    <div className="w-full">
      <div className="flex row">
        {data?.map((item, idx) => (
          <div key={idx}>
            <CreateLink {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
