import * as Notifications from "expo-notifications";

export const showNotification = async (notification: {
  title: string;
  body: string;
  data: { info: string };
}) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: notification.title,
      body: notification.body,
      data: notification.data,
    },
    trigger: null,
  });
};
