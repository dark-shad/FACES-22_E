from rest_framework.permissions import BasePermission

class IsProfileFilled(BasePermission):
  message = 'Profile Not Filled or Phone Number Not Verified'
  def has_permission(self, request, view):
    print('yes')
    print(request.user.has_filled_profile)
    return request.user.has_filled_profile