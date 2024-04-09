import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProperty from "../hooks/useProperty";
import { Key } from "react";

interface Props<T> {
  keyProperty: string;
  onSelectProperty: (property: T) => void;
  selectedProperty: T | null;
}

const DropdownFilterSelector = <T extends Key | null | undefined>({
  keyProperty,
  selectedProperty,
  onSelectProperty,
}: Props<T>) => {
  const { properties, error } = useProperty<T>(keyProperty);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {(selectedProperty ? selectedProperty : keyProperty) as string}
      </MenuButton>
      <MenuList>
        {properties.map((item) => (
          <MenuItem key={item} onClick={() => onSelectProperty(item)}>
            {item as string}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownFilterSelector;
