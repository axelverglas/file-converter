import {
  Image as ImageIcon,
  FileText,
  Video,
  File,
  Volume2,
} from "lucide-react";

export default function fileToIcon(file_type: any): any {
  if (file_type.includes("video")) return <Video />;
  if (file_type.includes("audio")) return <Volume2 />;
  if (file_type.includes("text")) return <FileText />;
  if (file_type.includes("image")) return <ImageIcon />;
  else return <File />;
}
