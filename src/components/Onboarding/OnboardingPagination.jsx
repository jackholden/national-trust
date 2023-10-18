import { StyleSheet } from "react-native";
StyleSheet;
import { Pagination } from "react-native-swiper-flatlist";

export default function OnboardingPagination(props) {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor="black"
      paginationActiveColor="white"
    />
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    bottom: 30,
  },
  pagination: {
    borderRadius: 50,
    width: 10,
    height: 10,
  },
});
