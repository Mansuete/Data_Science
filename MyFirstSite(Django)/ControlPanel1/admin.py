from django.contrib import admin
from .models import *


class TimetableInline(admin.TabularInline):
    model = Timetable
    extra = 0


class GroupAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Group._meta.fields]
    inlines = [TimetableInline]

    class Meta:
        model = Group

admin.site.register(Group, GroupAdmin)


class TeacherAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Teacher._meta.fields]

    class Meta:
        model = Teacher


admin.site.register(Teacher, TeacherAdmin)


class LessonNameAdmin(admin.ModelAdmin):
    list_display = [field.name for field in LessonName._meta.fields]

    class Meta:
        model = LessonName


admin.site.register(LessonName, LessonNameAdmin)


class RoomAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Room._meta.fields]

    class Meta:
        model = Room


admin.site.register(Room, RoomAdmin)


class DayAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Day._meta.fields]

    class Meta:
        model = Day


admin.site.register(Day, DayAdmin)


class LessonNumberAdmin(admin.ModelAdmin):
    list_display = [field.name for field in LessonNumber._meta.fields]

    class Meta:
        model = LessonNumber


admin.site.register(LessonNumber, LessonNumberAdmin)


class TimetableAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Timetable._meta.fields]

    class Meta:
        model = Timetable

admin.site.register(Timetable, TimetableAdmin)
