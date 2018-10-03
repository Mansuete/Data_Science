from django.db import models


class Group(models.Model):
    group_name = models.CharField(max_length=10, blank=True, null=True, default=None)
    group_weekend = models.BooleanField(default=None)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "Клас %s" % self.group_name

    class Meta:
        ordering = ('group_name',)
        verbose_name = 'Клас'
        verbose_name_plural = 'Створити розклад уроків для класу'


class Teacher(models.Model):
    teacher_name = models.CharField(max_length=48, blank=True, null=True, default=None)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "Викладач %s" % self.teacher_name

    class Meta:
        ordering = ('teacher_name',)
        verbose_name = 'Вчитель'
        verbose_name_plural = 'Вчителі'


class LessonName(models.Model):
    lesson_name = models.CharField(max_length=124, blank=True, null=True, default=None)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "Предмет %s" % self.lesson_name

    class Meta:
        ordering = ('lesson_name',)
        verbose_name = 'Предмет'
        verbose_name_plural = 'Предмети'


class Room(models.Model):
    room_number = models.CharField(max_length=10, blank=True, null=True, default=None)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "Кабінет %s" % self.room_number

    class Meta:
        ordering = ('room_number',)
        verbose_name = 'Номер Кабінета'
        verbose_name_plural = 'Номери Кабінетів'

class Day(models.Model):
    day_name = models.CharField(max_length=14, blank=True, null=True, default=None)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "Навчальний день %s" % self.day_name

    class Meta:
        verbose_name = 'Навчальний день'
        verbose_name_plural = 'Навчальнні дні'


class LessonNumber(models.Model):
    lesson_number = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "Номер уроку %s" % self.lesson_number

    class Meta:
        ordering = ('lesson_number',)
        verbose_name = 'Номер уроку'
        verbose_name_plural = 'Номери уроків'


class Timetable(models.Model):
    group = models.ForeignKey(Group, blank=True, null=True, default=None, on_delete=False)
    day = models.ForeignKey(Day, blank=True, null=True, default=None, on_delete=False)
    lesson_number = models.ForeignKey(LessonNumber, blank=True, null=True, default=None, on_delete=False)
    teacher = models.ForeignKey(Teacher, blank=True, null=True, default=None, on_delete=False)
    lesson_name = models.ForeignKey(LessonName, blank=True, null=True, default=None, on_delete=False)
    room_number = models.ForeignKey(Room, blank=True, null=True, default=None, on_delete=False)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "Розклад уроків %s" % self.group.group_name

    class Meta:
        verbose_name = 'Розклад уроків'
        verbose_name_plural = 'Розклад уроків'
