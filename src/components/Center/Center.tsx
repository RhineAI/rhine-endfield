import CoverLineWhiteA from "@/components/Center/svg/line-white-a.svg";
import CoverLineWhiteB from "@/components/Center/svg/line-white-b.svg";
import CoverLineWhiteC from "@/components/Center/svg/line-white-c.svg";
import CoverLineWhiteD from "@/components/Center/svg/line-white-d.svg";
import CoverLineOrange from "@/components/Center/svg/line-orange.svg";
import "./Center.scss";
import Blocks from "@/components/Center/Blocks";

export default function Center() {
  return (
    <div className="Center">
      <div className="Circle CircleA" />
      <div className="Circle CircleB" />
      <Blocks />
      <div className="Circle CircleC" />
      <CoverLineWhiteA className="Line LineA" viewBox="0 0 1024 1024" />
      <CoverLineWhiteB className="Line LineB" viewBox="0 0 1024 1024" />
      <CoverLineWhiteC className="Line LineC" viewBox="0 0 1024 1024" />
      <CoverLineWhiteD className="Line LineD" viewBox="0 0 1024 1024" />
      <CoverLineOrange className="Line LineM" viewBox="0 0 1024 1024" />
    </div>
  );
}
