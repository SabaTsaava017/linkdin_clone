import FilterSvg from "./Block";
import FacebookLogo from "./logo";
import SearchIcon from "./Search";

export type iconsName = "filterSvg" | "facebookLogo" | "searchIcon";

interface IconsProps {
  iconName: iconsName | any;
  width?: any;
  height?: any;
}

function IconComponent({ iconName, width, height }: IconsProps) {
  let Icon = null;

  switch (iconName) {
    case "filterSvg": {
      Icon = FilterSvg;
      break;
    }
    case "facebookLogo": {
      Icon = FacebookLogo;
      break;
    }
    case "searchIcon": {
      Icon = SearchIcon;
      break;
    }
    default: {
      return null;
    }
  }

  return <Icon width={width} height={height} />;
}

export default IconComponent;
