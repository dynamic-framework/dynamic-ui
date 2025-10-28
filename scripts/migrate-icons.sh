#!/bin/bash

# Script to help migrate Bootstrap icon names to Lucide icon names
# This is a helper - review changes before committing!

echo "🔄 Migrating icon names from Bootstrap to Lucide..."
echo "⚠️  This will modify files in place. Make sure you have a backup!"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Cancelled."
    exit 1
fi

# Common icon replacements
# Format: 's/icon="old-name"/icon="NewName"/g'

find stories src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/icon="house-door"/icon="Home"/g' \
  -e 's/icon="house"/icon="Home"/g' \
  -e 's/icon="person"/icon="User"/g' \
  -e 's/icon="people"/icon="Users"/g' \
  -e 's/icon="gear"/icon="Settings"/g' \
  -e 's/icon="search"/icon="Search"/g' \
  -e 's/icon="envelope"/icon="Mail"/g' \
  -e 's/icon="bell"/icon="Bell"/g' \
  -e 's/icon="calendar"/icon="Calendar"/g' \
  -e 's/icon="clock"/icon="Clock"/g' \
  -e 's/icon="heart-fill"/icon="Heart"/g' \
  -e 's/icon="heart"/icon="Heart"/g' \
  -e 's/icon="star-fill"/icon="Star"/g' \
  -e 's/icon="star"/icon="Star"/g' \
  -e 's/icon="check-circle-fill"/icon="CircleCheck"/g' \
  -e 's/icon="check-circle"/icon="CheckCircle"/g' \
  -e 's/icon="check"/icon="Check"/g' \
  -e 's/icon="x-circle-fill"/icon="CircleX"/g' \
  -e 's/icon="x-circle"/icon="XCircle"/g' \
  -e 's/icon="x"/icon="X"/g' \
  -e 's/icon="circle-fill"/icon="Disc"/g' \
  -e 's/icon="circle"/icon="Circle"/g' \
  -e 's/icon="square-fill"/icon="Square"/g' \
  -e 's/icon="square"/icon="Square"/g' \
  -e 's/icon="arrow-left"/icon="ArrowLeft"/g' \
  -e 's/icon="arrow-right"/icon="ArrowRight"/g' \
  -e 's/icon="arrow-up"/icon="ArrowUp"/g' \
  -e 's/icon="arrow-down"/icon="ArrowDown"/g' \
  -e 's/icon="chevron-left"/icon="ChevronLeft"/g' \
  -e 's/icon="chevron-right"/icon="ChevronRight"/g' \
  -e 's/icon="chevron-up"/icon="ChevronUp"/g' \
  -e 's/icon="chevron-down"/icon="ChevronDown"/g' \
  -e 's/icon="plus-circle"/icon="PlusCircle"/g' \
  -e 's/icon="plus"/icon="Plus"/g' \
  -e 's/icon="dash-circle"/icon="MinusCircle"/g' \
  -e 's/icon="dash"/icon="Minus"/g' \
  -e 's/icon="trash3"/icon="Trash2"/g' \
  -e 's/icon="trash"/icon="Trash"/g' \
  -e 's/icon="pencil"/icon="Pencil"/g' \
  -e 's/icon="eye-slash"/icon="EyeOff"/g' \
  -e 's/icon="eye"/icon="Eye"/g' \
  -e 's/icon="download"/icon="Download"/g' \
  -e 's/icon="upload"/icon="Upload"/g' \
  -e 's/icon="cloud"/icon="Cloud"/g' \
  -e 's/icon="folder"/icon="Folder"/g' \
  -e 's/icon="file"/icon="File"/g' \
  -e 's/icon="image"/icon="Image"/g' \
  -e 's/icon="camera"/icon="Camera"/g' \
  -e 's/icon="link"/icon="Link"/g' \
  -e 's/icon="share"/icon="Share2"/g' \
  -e 's/icon="three-dots-vertical"/icon="MoreVertical"/g' \
  -e 's/icon="three-dots"/icon="MoreHorizontal"/g' \
  -e 's/icon="list"/icon="List"/g' \
  -e 's/icon="grid"/icon="Grid3x3"/g' \
  -e 's/icon="menu"/icon="Menu"/g' \
  -e 's/icon="filter"/icon="Filter"/g' \
  -e 's/icon="info-circle-fill"/icon="Info"/g' \
  -e 's/icon="info-circle"/icon="Info"/g' \
  -e 's/icon="exclamation-triangle-fill"/icon="AlertTriangle"/g' \
  -e 's/icon="exclamation-triangle"/icon="AlertTriangle"/g' \
  -e 's/icon="exclamation-circle"/icon="AlertCircle"/g' \
  -e 's/icon="question-circle"/icon="HelpCircle"/g' \
  -e 's/icon="lock"/icon="Lock"/g' \
  -e 's/icon="unlock"/icon="Unlock"/g' \
  -e 's/icon="shield"/icon="Shield"/g' \
  -e 's/icon="globe"/icon="Globe"/g' \
  -e 's/icon="map"/icon="Map"/g' \
  -e 's/icon="bookmark"/icon="Bookmark"/g' \
  -e 's/icon="bookmarks"/icon="Bookmarks"/g' \
  -e 's/icon="tag"/icon="Tag"/g' \
  -e 's/icon="fire"/icon="Flame"/g' \
  -e 's/icon="lightning"/icon="Zap"/g' \
  -e 's/icon="sun"/icon="Sun"/g' \
  -e 's/icon="moon"/icon="Moon"/g' \
  -e 's/icon="cloud-sun"/icon="CloudSun"/g' \
  -e 's/icon="cloud-rain"/icon="CloudRain"/g' \
  -e 's/icon="wifi"/icon="Wifi"/g' \
  -e 's/icon="battery"/icon="Battery"/g' \
  -e 's/icon="power"/icon="Power"/g' \
  -e 's/icon="telephone"/icon="Phone"/g' \
  -e 's/icon="at"/icon="AtSign"/g' \
  -e 's/icon="chat-dots"/icon="MessageSquare"/g' \
  -e 's/icon="chat"/icon="MessageCircle"/g' \
  -e 's/icon="play"/icon="Play"/g' \
  -e 's/icon="pause"/icon="Pause"/g' \
  -e 's/icon="volume-up"/icon="Volume2"/g' \
  -e 's/icon="volume-mute"/icon="VolumeX"/g' \
  -e 's/icon="gift"/icon="Gift"/g' \
  -e 's/icon="trophy"/icon="Trophy"/g' \
  -e 's/icon="key"/icon="Key"/g' \
  -e 's/icon="printer"/icon="Printer"/g' \
  -e 's/icon="scissors"/icon="Scissors"/g' \
  -e 's/icon="paperclip"/icon="Paperclip"/g' \
  -e 's/icon="pin"/icon="Pin"/g' \
  {} \;

echo ""
echo "✅ Icon migration complete!"
echo ""
echo "📝 Next steps:"
echo "1. Review the changes with: git diff"
echo "2. Test your application"
echo "3. Check for any remaining Bootstrap icon names"
echo "4. See ICON_MIGRATION_GUIDE.md for manual migration of uncommon icons"
