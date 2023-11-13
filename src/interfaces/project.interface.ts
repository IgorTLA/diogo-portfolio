interface Project {
  title: string;
  route?: string;
  image: JSX.Element;
  tags: number[];
  content?: { imageHeader?: JSX.Element; about?: JSX.Element } | undefined;
}
