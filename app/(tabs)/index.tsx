import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
        ></Image>

        {moviesLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"0000ff"}
            className="mt-10 self-center"
          ></ActivityIndicator>
        ) : moviesError ? (
          <Text>Error: {moviesError.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie, series, or episode"
            ></SearchBar>
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Popular Latest Movies
              </Text>
              <FlatList
                data={movies?.results || []}
                renderItem={({ item }) => (
                  <MovieCard
                    id={item.id}
                    title={item.title}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    release_date={item.release_date}
                    adult={false}
                    backdrop_path={""}
                    genre_ids={[]}
                    original_language={""}
                    original_title={""}
                    overview={""}
                    popularity={0}
                    video={false}
                    vote_count={0}
                  />
                )}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 20,
                }}
                scrollEnabled={false}
                className="mt-2 pb-32"
              />
            </>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
