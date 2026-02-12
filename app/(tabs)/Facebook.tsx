import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';

import { FontAwesome6 } from '@expo/vector-icons';

function Post(props: any) {
  const [liked, setLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [text, setText] = useState("");

  const [comments, setComments] = useState<
    { text: string; username: string; profile: string }[]
  >([]);

  const myProfile = "https://pbs.twimg.com/media/Gk-y_3AWQAA7o38.jpg";
  const myUsername = "My Account";

  const addComment = () => {
    if (text.trim() !== "") {
      setComments(prev => [
        ...prev,
        {
          text: text,
          username: myUsername,
          profile: myProfile
        }
      ]);
      setText("");
    }
  };

  const deleteComment = (index: number) => {
    setComments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.post}>

      <View style={styles.postHeader}>
        <Image
          source={{ uri: props.profile }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{props.username}</Text>
      </View>

      <Text style={styles.caption}>{props.caption}</Text>

      <Image
        source={{ uri: props.image }}
        style={styles.postImage}
      />

      <View style={styles.actions}>

        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Text
            style={[
              styles.actionText,
              { color: liked ? "#1877F2" : "#65676B" }
            ]}
          >
            <FontAwesome6 name="thumbs-up" size={20} />
            {liked ? " Liked" : " Like"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowCommentBox(!showCommentBox)}>
          <Text style={styles.actionText}>
            <FontAwesome6 name="comment" size={20} /> Comment
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.actionText}>
            <FontAwesome6 name="share" size={20} /> Share
          </Text>
        </TouchableOpacity>

      </View>

      {showCommentBox && (
        <View>

          <View style={styles.commentInputRow}>
            <Image
              source={{ uri: myProfile }}
              style={styles.commentProfile}
            />

            <TextInput
              style={styles.commentInput}
              placeholder="Write a comment..."
              value={text}
              onChangeText={setText}
            />

            <TouchableOpacity
              style={styles.postButton}
              onPress={addComment}
            >
              <Text style={{ color: "white" }}>Post</Text>
            </TouchableOpacity>
          </View>

          {comments.map((c, i) => (
            <View key={i} style={styles.commentRow}>

              <Image
                source={{ uri: c.profile }}
                style={styles.commentProfile}
              />

              <View style={styles.commentBox}>
                <Text style={{ fontWeight: "bold" }}>{c.username}</Text>
                <Text>{c.text}</Text>
              </View>

              <TouchableOpacity onPress={() => deleteComment(i)}>
                <FontAwesome6 name="trash" size={18} color="red" />
              </TouchableOpacity>

            </View>
          ))}

        </View>
      )}

    </View>
  );
}

export default function Facebook() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>
      </View>

      <ScrollView>

        <Post
          profile="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8409803456c5945daebcdd005d"
          username="qin shi huang"
          caption="ห่าว"
          image="https://images.immediate.co.uk/production/volatile/sites/3/2025/11/Record-of-Ragnarok-season-3-c2ad9b3.png"
        />

        <Post
          profile="https://static.wikia.nocookie.net/shuumatsu-no-valkyrie/images/4/43/Poseidon.png/revision/latest?cb=20240702104454"
          username="Poseidon"
          caption="เทพไม่รวมกลุ่ม"
          image="https://i.redd.it/tobirama-senju-vs-poseidon-record-of-ragnarok-v0-tzogri4d8xnd1.jpg?width=1920&format=pjpg&auto=webp&s=8f2b71e9e0c14f68d093d0d5bd9f8f2d4d7e41b1"
        />

        <Post
          profile="https://i.pinimg.com/736x/bb/90/90/bb909009758ae1ade0c193399040dfcd.jpg"
          username="Hades"
          caption="ข้าคือราชาแห่งนรก"
          image="https://cms.dmpcdn.com/moviearticle/2025/12/11/870e0f00-d63d-11f0-98b4-4b806f38eb56_webp_original.webp"
        />

        <Post
          profile="https://i.pinimg.com/736x/bb/90/90/bb909009758ae1ade0c193399040dfcd.jpg"
          username="Beelzebub"
          caption="ทุกสิ่งล้วนสูญสลาย"
          image="https://i.ytimg.com/vi/sdV9XniSAUA/hq720.jpg"
        />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5"
  },

  header: {
    height: 60,
    backgroundColor: "#1877F2",
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  logo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },

  post: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },

  username: {
    fontWeight: "bold",
    fontSize: 16
  },

  caption: {
    marginBottom: 10,
    fontSize: 15
  },

  postImage: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 10
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10
  },

  actionText: {
    color: "#65676B"
  },

  commentInputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },

  commentInput: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    borderRadius: 20,
    padding: 8,
    marginHorizontal: 8
  },

  postButton: {
    backgroundColor: "#1877F2",
    padding: 8,
    borderRadius: 10
  },

  commentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8
  },

  commentProfile: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8
  },

  commentBox: {
    backgroundColor: "#f0f2f5",
    padding: 8,
    borderRadius: 10,
    flex: 1
  }
});


