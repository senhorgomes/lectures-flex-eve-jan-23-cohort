import PlantListItem from "../components/PlantListItem";

export default {
  title: 'PlantListItem',
  component: PlantListItem,
  tags: [],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WateredPlantListItem = {
  args: {
    name: "Watered Plant",
    last_watered: 5,
    freq_of_water: 10,
    hasBeenWatered: true
  },
};
export const NotWateredPlantListItem = {
  args: {
    name: "I'm thirsty!",
    last_watered: 5,
    freq_of_water: 10,
    hasBeenWatered: false
  },
};
